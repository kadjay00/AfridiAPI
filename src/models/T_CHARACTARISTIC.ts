import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_CHARACTARISTIC', {schema: 'dbo' } )
@Index('IX_CHARACTARISTIC_PKINDEX', ['CHA_CHARACTARISTIC_C'], {unique: true})
export class T_CHARACTARISTIC {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'CHA_CHARACTARISTIC_C',
        })
    public CHA_CHARACTARISTIC_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CHA_DESCRIPNED_C',
        })
    public CHA_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'CHA_DESCRIPFRA_C',
        })
    public CHA_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'CHA_USERID_C',
        })
    public CHA_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'cha_flagdelete_C',
        })
    public cha_flagdelete_C: string | null;

}
