import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_DELIVERYCODE', {schema: 'dbo' } )
@Index('IX_DELIVERYCODE_PKINDEX', ['DLV_DELIVERYCODE_C'], {unique: true})
export class T_DELIVERYCODE {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'DLV_DELIVERYCODE_C',
        })
    public DLV_DELIVERYCODE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'DLV_DESCRIPNED_C',
        })
    public DLV_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'DLV_DESCRIPFRA_C',
        })
    public DLV_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'DLV_USERID_C',
        })
    public DLV_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'dlv_flagdelete_C',
        })
    public dlv_flagdelete_C: string | null;

}
