import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_DATATYPE', {schema: 'dbo' } )
@Index('IX_DATATYPE_PKINDEX', ['DTT_DATATYPE_C'], {unique: true})
export class T_DATATYPE {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'DTT_DATATYPE_C',
        })
    public DTT_DATATYPE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'DTT_DESCRIPNED_C',
        })
    public DTT_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'DTT_DESCRIPFRA_C',
        })
    public DTT_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'DTT_USERID_C',
        })
    public DTT_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'dtt_flagdelete_C',
        })
    public dtt_flagdelete_C: string | null;

}
