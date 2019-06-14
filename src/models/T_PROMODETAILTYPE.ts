import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PROMODETAILTYPE', {schema: 'dbo' } )
@Index('IX_PROMODETAILTYPE_PKINDEX', ['DTP_PROMODETAILTYPE_C'], {unique: true})
export class T_PROMODETAILTYPE {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'DTP_PROMODETAILTYPE_C',
        })
    public DTP_PROMODETAILTYPE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'DTP_DESCRIPNED_C',
        })
    public DTP_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'DTP_DESCRIPFRA_C',
        })
    public DTP_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'DTP_USERID_C',
        })
    public DTP_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'dtp_flagdelete_C',
        })
    public dtp_flagdelete_C: string | null;

}
