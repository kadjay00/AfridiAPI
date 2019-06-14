import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ALCOHOL', {schema: 'dbo' } )
@Index('IX_ALCOHOL_PKINDEX', ['ALC_ALCOHOL_C'], {unique: true})
export class T_ALCOHOL {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'ALC_ALCOHOL_C',
        })
    public ALC_ALCOHOL_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'ALC_DESCRIPNED_C',
        })
    public ALC_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'ALC_DESCRIPFRA_C',
        })
    public ALC_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'ALC_USERID_C',
        })
    public ALC_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'alc_flagdelete_C',
        })
    public alc_flagdelete_C: string | null;

}
